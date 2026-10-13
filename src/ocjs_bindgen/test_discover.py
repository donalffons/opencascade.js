"""Unit tests for the NCollection auto-discovery module."""
import unittest


class TestMangleTemplateName(unittest.TestCase):
    def test_simple_type(self):
        from discover import mangle_template_name
        self.assertEqual(
            mangle_template_name("NCollection_Array1", ["gp_Pnt"]),
            "NCollection_Array1_gp_Pnt",
        )

    def test_multiple_args(self):
        from discover import mangle_template_name
        self.assertEqual(
            mangle_template_name(
                "NCollection_DataMap",
                ["TCollection_AsciiString", "TCollection_AsciiString"],
            ),
            "NCollection_DataMap_TCollection_AsciiString_TCollection_AsciiString",
        )

    def test_handle_occ_namespace(self):
        from discover import mangle_template_name
        self.assertEqual(
            mangle_template_name(
                "NCollection_Sequence",
                ["occ::handle<Geom_Curve>"],
            ),
            "NCollection_Sequence_handle_Geom_Curve",
        )

    def test_handle_opencascade_namespace(self):
        from discover import mangle_template_name
        self.assertEqual(
            mangle_template_name(
                "NCollection_Sequence",
                ["opencascade::handle<Geom_Surface>"],
            ),
            "NCollection_Sequence_handle_Geom_Surface",
        )

    def test_nested_namespace(self):
        from discover import mangle_template_name
        self.assertEqual(
            mangle_template_name(
                "NCollection_List",
                ["IMeshData::IFaceHandle"],
            ),
            "NCollection_List_IMeshData_IFaceHandle",
        )

    def test_nested_template_arg(self):
        from discover import mangle_template_name
        self.assertEqual(
            mangle_template_name(
                "NCollection_Array1",
                ["NCollection_Vec3<float>"],
            ),
            "NCollection_Array1_NCollection_Vec3_float",
        )

    def test_nested_template_with_hasher(self):
        from discover import mangle_template_name
        self.assertEqual(
            mangle_template_name(
                "NCollection_DataMap",
                ["TopoDS_Shape", "NCollection_List<Message_Msg>", "TopTools_ShapeMapHasher"],
            ),
            "NCollection_DataMap_TopoDS_Shape_NCollection_List_Message_Msg_TopTools_ShapeMapHasher",
        )

    def test_deeply_nested_template(self):
        from discover import mangle_template_name
        self.assertEqual(
            mangle_template_name(
                "NCollection_HArray1",
                ["occ::handle<NCollection_HSequence<occ::handle<StepElement_CurveElementPurposeMember>>>"],
            ),
            "NCollection_HArray1_handle_NCollection_HSequence_handle_StepElement_CurveElementPurposeMember",
        )

    def test_const_pointer_arg_returns_none(self):
        from discover import mangle_template_name
        result = mangle_template_name(
            "NCollection_Sequence",
            ["const gp_Pnt2d *"],
        )
        self.assertIsNotNone(result)
        self.assertNotIn("*", result)
        self.assertNotIn("const", result)


class TestGenerateUsingDeclarations(unittest.TestCase):
    def test_generates_sorted_declarations(self):
        from discover import generate_using_declarations
        discovered = {
            ("NCollection_Array1_gp_Pnt", "NCollection_Array1", ("gp_Pnt",)),
            ("NCollection_Sequence_TDF_Label", "NCollection_Sequence", ("TDF_Label",)),
        }
        result = generate_using_declarations(discovered)
        lines = result.strip().split("\n")
        self.assertEqual(len(lines), 2)
        self.assertIn("using NCollection_Array1_gp_Pnt = NCollection_Array1<gp_Pnt>;", result)
        self.assertIn("using NCollection_Sequence_TDF_Label = NCollection_Sequence<TDF_Label>;", result)
        self.assertEqual(lines[0], "using NCollection_Array1_gp_Pnt = NCollection_Array1<gp_Pnt>;")

    def test_multi_arg_template(self):
        from discover import generate_using_declarations
        discovered = {
            (
                "NCollection_DataMap_TCollection_AsciiString_TCollection_AsciiString",
                "NCollection_DataMap",
                ("TCollection_AsciiString", "TCollection_AsciiString"),
            ),
        }
        result = generate_using_declarations(discovered)
        self.assertIn(
            "using NCollection_DataMap_TCollection_AsciiString_TCollection_AsciiString = "
            "NCollection_DataMap<TCollection_AsciiString, TCollection_AsciiString>;",
            result,
        )

    def test_empty_set(self):
        from discover import generate_using_declarations
        result = generate_using_declarations(set())
        self.assertEqual(result, "")


if __name__ == "__main__":
    unittest.main()

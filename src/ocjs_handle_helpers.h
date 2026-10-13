#ifndef OCJS_HANDLE_HELPERS_H
#define OCJS_HANDLE_HELPERS_H

#include <Standard_Handle.hxx>

template <typename T>
bool handle_isNull(const opencascade::handle<T>& h) {
    return h.IsNull();
}

template <typename T>
void handle_nullify(opencascade::handle<T>& h) {
    h.Nullify();
}

#endif // OCJS_HANDLE_HELPERS_H

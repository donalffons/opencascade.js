---
sidebar_position: 1
---

# Intro

Have a look at [progressIndicator.test.ts](/test/progressIndicator.test.ts) for a working example.

OpenCascade offers support for progress indicators and cancellation of long-running processes ("user break") via the `Message_ProgressIndicator` base class. Specializations of this base class can be used in calls to certain methods (e.g. `BRepAlgoAPI_Fuse::BRepAlgoAPI_Fuse`) to report the progress of a long-running operation or to cancel it. Since OpenCascade requires the user to derive a custom class based on `Message_ProgressIndicator` (called `MyProgressIndicator` from here) which isn't currently supported by OpenCascade.js, using those features in OpenCascade.js requires creating a custom build.

When deriving your specialized `MyProgressIndicator` class, you have to override 1 - 3 methods.

**Show:** This method must be overriden, as it is a purely virtual method. It is called by OpenCascade internally, whenever there is an update to the value of the progress of the current operation.

**UserBreak:** This method can be overriden if required. It returns a boolean value, indicating if a long-running process should be cancelled. By default, it returns `false`.

**Reset:** This method can be overriden if required. It is called when a new long-running process is started.

"""Make `sentinels.py` importable from the sentinel test modules without
requiring callers to set PYTHONPATH or invoke pytest from a specific cwd.
"""

from __future__ import annotations

import sys
from pathlib import Path

_HERE = Path(__file__).resolve().parent
if str(_HERE) not in sys.path:
    sys.path.insert(0, str(_HERE))

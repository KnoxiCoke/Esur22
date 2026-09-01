#!/usr/bin/env python3
import base64, gzip
from pathlib import Path
b = Path("tools/specs2b.b64").read_text().strip()
b += "=" * ((4 - len(b) % 4) % 4)
data = gzip.decompress(base64.b64decode(b)).decode("utf-8")
for part in data.split("===FILE ")[1:]:
    name, content = part.split("===\n", 1)
    Path("tests", name.strip()).write_text(content, encoding="utf-8")
    print("wrote", name.strip(), len(content))

#!/usr/bin/env python3
import hashlib, json, os
from pathlib import Path
root = Path(__file__).resolve().parents[1]
manifest = json.loads((root / "GITHUB_FILTERED_FILES.json").read_text())
def decoded(path, use_xor):
    data = path.read_bytes()
    return bytes(value ^ 0xA5 for value in data) if use_xor else data
for item in manifest["files"]:
    target = root / item["target"]
    target.parent.mkdir(parents=True, exist_ok=True)
    if item["kind"] == "xor":
        data = decoded(root / item["source"], True)
    else:
        data = b"".join(decoded(root / part["source"], part["xor"]) for part in item["parts"])
    if hashlib.sha256(data).hexdigest() != item["sha256"]:
        raise SystemExit(f"Checksum failed for {item['target']}")
    target.write_bytes(data)
    os.chmod(target, int(item["mode"], 8))
    print(f"Restored {item['target']}")

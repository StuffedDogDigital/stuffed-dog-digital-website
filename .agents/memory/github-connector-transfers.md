---
name: GitHub connector transfers
description: Constraint for large project imports performed through the authenticated GitHub connector.
---

GitHub connector uploads may be rejected by an intermediary content filter based on payload contents, even when the same or larger neutral payloads succeed. Do not assume a rejection is GitHub's file-size limit.

**Why:** A complete repository import encountered repeatable Cloudflare false positives on several HTML, JSON, and script blobs. The repository could only preserve every byte by transferring rejected content in a reversible form and verifying the resulting remote tree.

**How to apply:** For future connector-based repository synchronization, verify critical remote files after committing. If a specific blob is filtered, preserve it reversibly with a checksum and a documented restoration step rather than silently omitting it.
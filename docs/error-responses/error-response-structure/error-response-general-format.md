---
sidebar_position: 1
---

# 8.1.1 General Format

All error responses must follow this strict JSON format:

```json
{
  "status": "error", // always "error"
  "errors": [
    {
      "code": "ERROR_CODE", // predefined error type (see 8.2)
      "message": "Human-readable explanation of the problem.",
      "location": "path.to.field",
      "expected_format": {
        "type": "string|integer|array|object",
        "allowed_values": [], // present ONLY if the field must be one of these values
        "items": {}, // present ONLY if "type" = "array"
        "properties": {} // present ONLY if "type" = "object"
      }
    }
  ]
}
```

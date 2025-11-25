---
sidebar_position: 4
---

# 5.4 modify_field

Explanation:

- Updates a single field of an LDS element.
- Used for quick inline edits suggested by the AI or manually entered by the user.

Basic JSON Structure:

```json
{
  "action_type": "modify_field",
  "target": {
    "context": "CourseInfo | DP | PA | ILO | CC | Task | Lesson",
    "context_object_id": "integer"
  },
  "payload": {
    "field_name": "string",
    "new_value": "any"
  }
}
```

Example (PA context):

```json
{
  "action_type": "modify_field",
  "target": { "context": "PA", "context_object_id": 55 },
  "payload": {
    "field_name": "description",
    "new_value": "Inquiry-based learning encouraging exploration and problem-solving."
  }
}
```

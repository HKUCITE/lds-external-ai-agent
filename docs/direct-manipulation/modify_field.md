---
sidebar_position: 3
---

# 5.3 modify_field

Explanation:

- Updates multiple fields of an existing LDS element in a single operation.
- Commonly used for bulk updates or when importing structured AI-generated data.

Basic JSON Structure:

```json
{
  "action_type": "modify_field",
  "target": {
    "context": "CourseInfo | ILO | DP | PA | CC | Task | Lesson",
    "context_object_id": "integer"
  },
  "payload": {
    "fields": {
      /* Fields allowed for this context — see Appendix 7.1 */
    }
  }
}
```

Example (CourseInfo context):

```json
{
  "action_type": "modify_field",
  "target": { "context": "CourseInfo", "context_object_id": 10 },
  "payload": {
    "fields": {
      "topic": "AI-suggested — Introduction to Artificial Intelligence",
      "description": "Foundational course on AI concepts and applications.",
      "grade_levels": 12,
      "subjects": [4, 5],
      "learning_time": "40"
    }
  }
}
```

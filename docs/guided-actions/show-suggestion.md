---
sidebar_position: 2
---

# 4.2 show_suggestion

Basic JSON Structure

```json
{
  "action_type": "show_suggestion",
  "target": {
    "context": "CourseInfo | DP | PA | ILO | CC | Task | Lesson",
    "context_object_id": "integer"
  },
  "payload": {
    "suggestions": [
      {
        /* Fields allowed for this context — see [Appendix 7.1 Context-Specific Field Definitions](#_y1m7qxkl1vj1) */
      }
    ]
  },
  "ui": { "presentation": "popup | tooltip | sidebar" }
}
```

Explanation: Displays suggestions for improving a specific LDS object. Structure varies by context ([Appendix 7.1 Context-Specific Field Definitions](#_y1m7qxkl1vj1) defines allowed fields and which are mandatory/optional).

Example

```json
{
  "action_type": "show_suggestion",
  "target": { "context": "Task", "context_object_id": "123" },
  "payload": {
    "suggestions": [
      { "name": "Include a peer review step after submission." },
      { "description": "Add a reflection section at the end of the task." }
    ]
  },
  "ui": { "presentation": "sidebar" }
}
```

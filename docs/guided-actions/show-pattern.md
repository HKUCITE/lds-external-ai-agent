---
sidebar_position: 1
---

# 4.1 show_pattern

Basic JSON Structure

```json
{
  "action_type": "show_pattern",
  "target": { "context": "CourseInfo | DP | PA | ILO | CC | Task | Lesson" },
  "payload": {
    "patterns": [
      {
        /* Structure varies by context — see [Appendix 7.1 Context-Specific Field Definitions](#_y1m7qxkl1vj1) */
      }
    ]
  },
  "ui": { "presentation": "popup | sidebar | inline" }
}
```

Explanation: Displays one or more instructional design patterns for the given context. Fields must follow rules in the [Appendix 7.1 Context-Specific Field Definitions](#_y1m7qxkl1vj1).

Example

```json
{
  "action_type": "show_pattern",
  "target": { "context": "ILO" },
  "payload": {
    "patterns": [
      {
        "statement": "Apply design thinking process - Empathize with users",
        "bt_level": { "id": 3, "name": "Apply" },
        "type": { "id": 2, "name": "Disciplinary Skills" },
        "subject": [{ "id": 5, "name": "Technology Education" }]
      }
    ]
  },
  "ui": { "presentation": "popup" }
}
```

---
sidebar_position: 2
---

# 5.2 apply_suggestion

Explanation:

- Directly applies an AI-generated suggestion to update the target LDS element.
- The “changes” object must match the allowed fields for the given context (Appendix 7.1).

Basic JSON Structure:

```json
{
  "action_type": "apply_suggestion",
  "target": {
    "context": "CourseInfo | ILO | DP | PA | CC | Task | Lesson",
    "context_object_id": "integer"
  },
  "payload": {
    "changes": {
      /* Fields allowed for this context — see Appendix 7.1 */
    }
  }
}
```

Example (Task context):

```json
{
  "action_type": "apply_suggestion",
  "target": { "context": "Task", "context_object_id": 123 },
  "payload": {
    "changes": {
      "name": "AI-suggested — Peer Review Activity",
      "description": "Students review each other’s drafts and give constructive feedback.",
      "intended_learning_outcomes": [45, 46],
      "duration": "30"
    }
  }
}
```

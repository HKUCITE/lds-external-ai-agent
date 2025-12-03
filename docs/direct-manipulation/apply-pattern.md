---
sidebar_position: 1
---

# 5.1 apply_pattern

Explanation:

- Automatically applies an AI-generated instructional design pattern to a specific context (CourseInfo, DP, PA, ILO, CC, Task, Lesson).
- The pattern_object must follow Appendix 7.1 Context-Specific Field Definitions for the target context.

Basic JSON Structure:

```json
{
  "action_type": "apply_pattern",
  "target": { "context": "CourseInfo | ILO | DP | PA | CC | Task | Lesson" },
  "payload": {
    "pattern_object": {
      /* Fields vary by context — see Appendix 7.1 */
    }
  }
}
```

Example (ILO context):

```json
{
  "action_type": "apply_pattern",
  "target": { "context": "ILO" },
  "payload": {
    "pattern_object": {
      "statement": "AI-suggested — Apply design thinking process: Empathize with users",
      "type": 2,
      "bt_level": 3,
      "subjects": [5]
    }
  }
}
```

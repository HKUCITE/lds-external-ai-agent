---
sidebar_position: 2
---

# 2. Overall JSON Structure

```json
{
  "chat_message_reply": {
    "text": "string"
  },
  "actions": [
    {
      "action_type": "string",
      "target": {
        "context": "CourseInfo | DP | PA | ILO | CC | Task | Lesson",
        "context_object_id": 0
      },
      "payload": {},
      "ui": {
        "presentation": "popup | sidebar | tooltip | highlight | inline",
        "highlight_target": "string"
      }
    }
  ]
}
```

Explanation:

- chat_message_reply: Optional conversational text to display in the chat UI. Can be present alone or alongside actions.
- actions: Array of one or more primary actions LDS should perform.
- action_type: Defines the primary operation (UI interaction, data manipulation, navigation).
- target: Context and optional object ID to which the action applies.
- payload: Data required to perform the action (structure varies by action type and context).
- ui: Optional presentation instructions for the LDS interface, including highlight_target (must follow allowed values in [Appendix 7.2 Allowed highlight_target Values](#_1p6gmckbmloj)).

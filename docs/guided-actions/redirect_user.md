---
sidebar_position: 3
---

# 4.3 redirect_user

Basic JSON Structure

```json
{
  "action_type": "redirect_user",
  "payload": {
    "actions": [
      {
        "message": "string",
        "presentation": "popup | tooltip | highlight",
        "highlight_target": "string" /* must follow allowed values in [Appendix 7.2 Allowed highlight_target Values](#_1p6gmckbmloj) */
      }
    ]
  }
}
```

Explanation: Guides the user to take specific actions in the LDS interface.

Example

```json
{
  "action_type": "redirect_user",
  "payload": {
    "actions": [
      {
        "message": "Click the 'Add Task' button to create a new task.",
        "presentation": "tooltip",
        "highlight_target": "#Task.add-button"
      }
    ]
  }
}
```

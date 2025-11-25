---
sidebar_position: 6
---

# 6. Navigation & Directory Display

General JSON Structure

```json
{
  "action_type": "show_navigation",
  "payload": {
    "navigation_tree": [
      {
        "label": "string",
        "id": "string",
        "clickable_buttons": [{ "label": "string", "action": {} }],
        "children": []
      }
    ]
  }
}
```

Explanation

The **show_navigation** action displays a hierarchical, multi-level navigation tree in LDS.

**Node structure:**

- label _(string)_ — Text shown in the navigation UI.
- id _(string)_ — Internal LDS identifier for the node.
- clickable*buttons *(optional array)\_ — Each button has:
  - label _(string)_ — Text shown on the button.
  - action _(object)_ — Any valid LDS action object.
- children _(optional array)_ — An array of sub-nodes, each following the same structure.

Example (Multi-Level Navigation with Text + Buttons)

```json
{
  "chat_message_reply": {
    "text": "Here's the course navigation. You can expand modules and start lessons."
  },
  "actions": [
    {
      "action_type": "show_navigation",
      "payload": {
        "navigation_tree": [
          {
            "label": "Navigation Bar Opened",
            "id": "nav_bar_opened",
            "children": [
              {
                "label": "Choose Course Information",
                "id": "choose_course_information",
                "children": [
                  {
                    "label": "Provide Course name and brief description",
                    "id": "provide_course_name_brief_description",
                    "children": [
                      {
                        "label": "Refine and organize course descriptions (possibly by reading .docx or .pdf files)",
                        "id": "refine_organize_course_descriptions",
                        "clickable_buttons": [
                          {
                            "label": "Organize Course Description",
                            "action": {
                              "action_type": "insert_chat_template",
                              "payload": {
                                "template_id": "course_desc_001",
                                "template_name": "Organize Course Description",
                                "template_text": "Refine the course description for: [course_name]",
                                "placeholders": [{ "key": "course_name" }]
                              }
                            }
                          }
                        ]
                      }
                    ]
                  }
                ]
              }
            ]
          }
        ]
      }
    }
  ]
}
```

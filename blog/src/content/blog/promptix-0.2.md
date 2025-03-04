---
title: 'How to Use Promptix: A Developer''s Guide'
description: 'Explaining how promptix is intended to be used.'
pubDate: 'March 3 2025'
heroImage: 'https://raw.githubusercontent.com/Nisarg38/Portfolio-Website/refs/heads/master/blog/public/promptix-0.2.png'
---

Prompt management can get messy—especially when you're juggling multiple applications, models, and use cases. **Promptix** was created to bring order to that chaos. It's a local-first prompt management system that makes prompt versioning, dynamic templating, and even a visual interface a breeze. In this guide, we'll walk through the intention behind Promptix, how to set it up, and how to integrate it into your code.

For more details and to contribute, check out the [Promptix GitHub repository](https://github.com/Nisarg38/promptix-python).


### What's the Intention Behind Promptix?

At its core, Promptix is designed to help developers keep their prompt libraries organized and versioned. Whether you're using static prompts or need dynamic, context-aware system instructions, Promptix gives you the flexibility to:

- **Avoid prompt spaghetti:** No more messy prompt strings scattered all over your code.
- **Version control:** Easily manage different versions of your prompts (live, draft, etc.).
- **Dynamic templating:** Customize your prompts on the fly using context variables.
- **Visual management:** Utilize Promptix Studio—a sleek Streamlit-based UI—to manage your prompt library.

By centralizing prompt management, Promptix streamlines your workflow and improves consistency across your LLM interactions.


### Setting Up Promptix

Getting started with Promptix is simple. Follow these steps to set up your environment:

1. **Installation**:

   Make sure you have Promptix version **0.1.8 or above** installed. Open your terminal and run:

   ```bash
   pip install promptix
   ```

2. **Launching Promptix Studio**:

   Once installed, launch the Promptix Studio by typing the following command in your CLI:

   ```bash
   promptix studio
   ```

   This command will start a Streamlit app in your browser. The Studio will automatically generate a `prompts.yaml` file in your project directory.

**Creating Your Prompt Configuration:**

With the Studio open, you can now create and configure your prompts. Add your prompt text, set the dynamic variables, and define any additional settings or tools. This file acts as your central prompt library that integrates directly with your code.

For additional configuration details, refer to the Promptix GitHub repository.


### How to Use Promptix in Your Code

Promptix provides two main approaches for using prompts in your code: the simple static retrieval with `get_prompt()` and the dynamic builder pattern for complex, context-aware prompts.

#### 1. Simple Prompt Retrieval

For straightforward cases, use the `get_prompt()` function to retrieve a prompt by its name:

```python
from promptix import Promptix

# Retrieve the latest live version of a static prompt
system_instruction = Promptix.get_prompt("CustomerSupport")
print(system_instruction)
```

This method is perfect when you have a prompt that doesn't need any dynamic adjustments.

#### 2. Dynamic Templating with the Builder Pattern

For more advanced scenarios, the builder pattern lets you create system instructions that are dynamically generated based on context. For example:

```python
from promptix import Promptix

# Generate a dynamic system instruction using the builder pattern
system_instruction = (
    Promptix.builder("CustomerSupport")
    .with_customer_name("Alex")
    .with_issue_type("billing")
    .system_instruction()  # Returns the system instruction string
)
print(system_instruction)
```

This approach allows you to plug in different variables to adapt your prompt for various situations, such as customer service interactions where context matters.


### Ways to Leverage Promptix

Promptix is versatile and can be integrated into your projects in multiple ways:

#### Simple Prompt Versioning

**What it is:** Manage different versions of your prompts easily. You can have a live version for production and draft versions for testing new ideas.

**Example:**

```python
# Retrieve the live version of the prompt
live_prompt = Promptix.get_prompt("CustomerSupportStatic")

# Test a new draft version in development
draft_prompt = Promptix.get_prompt(
    prompt_template="CustomerSupportStatic",
    version="v2"
)
```

#### Dynamic Prompt Creation

**What it is:** Create dynamic, context-aware prompts using advanced templating. This is useful when your prompts need to adapt based on customer information or other variables.

**Example:**

```python
system_instruction = (
    Promptix.builder("CustomerSupport")
    .with_customer_name("Jane Doe")
    .with_department("Technical Support")
    .with_priority("high")
    .with_tool("ticket_history")
    .with_tool_parameter("ticket_history", "max_tickets", 5)
    .system_instruction()
)
print(system_instruction)
```

#### Integrated Model Configuration

**What it is:** Build prompt configurations that integrate directly with API clients like OpenAI or Anthropic. This future-proof approach allows you to manage multiple clients seamlessly.

**Example:**

```python

# Example conversation history
memory = [
    {"role": "user", "content": "Can you help me with my last transaction ?"}
]

# For OpenAI integration
openai_config = (
    Promptix.builder("AgentPrompt")
    .with_customer_context({"name": "Jordan Smith", "issue": "billing question"})
    .with_memory(memory)
    .for_client("openai")
    .build()
)
# Assuming you have an OpenAI client set up:
response = openai_client.chat.completions.create(**openai_config)

# For Anthropic integration (example)
anthropic_config = (
    Promptix.builder("AgentPrompt")
    .with_customer_context({"name": "Jordan Smith", "issue": "billing question"})
    .with_memory(memory)
    .for_client("anthropic")
    .build()
)
# For Anthropic Client
response = anthropic_client.messages.create(**anthropic_config)
```

These examples demonstrate how Promptix not only simplifies prompt management but also scales with your application's complexity—whether you're starting simple or building an integrated system that handles multiple client configurations.


### Conclusion

Promptix is more than just a prompt management tool—it's a way to bring clarity, organization, and dynamism to your LLM workflows. From simple prompt versioning to complex dynamic templating and even integrated model configurations, Promptix adapts to your needs.

With a simple installation and an intuitive Streamlit-based studio, you can start managing your prompts more effectively today. For more details, tips, and to contribute to the project, visit the Promptix GitHub repository.

**Happy prompting!**

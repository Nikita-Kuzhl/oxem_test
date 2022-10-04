import { ComponentMeta, ComponentStory } from '@storybook/react'

import Button from './Button'

export default {
  title: 'Button',
  component: Button,
  parameters: { viewportV: { defaultViewport: 'Mobile' } },
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />

export const Passive = Template.bind({})
Passive.args = {
  children: 'Passive',
}

export const Hover = Template.bind({})
Hover.args = {
  children: 'Hover',
}
Hover.parameters = { pseudo: { hover: true } }

export const Pressed = Template.bind({})
Pressed.args = {
  children: 'Pressed',
}
Pressed.parameters = { pseudo: { active: true } }

export const Disabled = Template.bind({})
Disabled.args = {
  children: 'Disabled',
  disabled: true,
}

export const Loading = Template.bind({})
Loading.args = {
  loading: true,
}

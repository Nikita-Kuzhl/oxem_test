import { ComponentMeta, ComponentStory } from '@storybook/react'

import Input from './Input'
import '../../styles/index.scss'

export default {
  title: 'Input',
  component: Input,
  args: {
    tagVal: 'm',
    onChange() {
      return
    },
  },
} as ComponentMeta<typeof Input>

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />

export const Passive = Template.bind({})
Passive.args = {
  title: 'Passive',
  value: 6,
  maxVal: 10,
  minVal: 1,
}

export const Hover = Template.bind({})
Hover.args = {
  title: 'Hover',
  value: 6,
  maxVal: 10,
  minVal: 1,
}
Hover.parameters = { pseudo: { hover: true } }

export const Active = Template.bind({})
Active.args = {
  title: 'Active',
  value: 6,
  maxVal: 10,
  minVal: 1,
}
Active.parameters = { pseudo: { active: true } }

export const Disabled = Template.bind({})
Disabled.args = {
  title: 'Disabled',
  disabled: true,
  value: 6,
}

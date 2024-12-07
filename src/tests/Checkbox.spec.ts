import { describe, test, expect } from 'vitest';
import Checkbox from '../components/Checkbox.vue';
import { mount } from '@vue/test-utils';
  
describe('Checkbox', () => {
	test('renders correctly', async () => {
		const wrapper = mount(Checkbox, {
			props: {
				modelValue:true,
				value: false,
				label: 'checkbox test'
			},
		});
  
		expect(wrapper.html()).toMatchSnapshot();
	});
});

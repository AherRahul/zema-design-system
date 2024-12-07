import { describe, test, expect } from 'vitest';
import CollapsibleContainer from '../components/CollapsibleContainer.vue';
import { mount } from '@vue/test-utils';
  
describe('CollapsibleContainer', () => {
	test('renders correctly', async () => {
		const wrapper = mount(CollapsibleContainer, {
			props: {
				value: true,
				title: 'Your expanded universe',
			},
		});
  
		expect(wrapper.html()).toMatchSnapshot();
	});
});

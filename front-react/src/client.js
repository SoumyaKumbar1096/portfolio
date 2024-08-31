import createClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = createClient({
    projectId: 'ufspu8ky',
    dataset: 'production',
    apiVersion: '2022-02-01',
    useCdn: true,
    token: 'skgTCYxioBrKyj38TwKiEWxGu6I1pVoSO0PJAvJumGyNtzgny2Y2HuWhyITrgox3fkDySginCnIuyYsHgc7M1yT3LM8bn81Rf2U3VprnhXNmSpMcqQvDlu0h5DKOjihEPM0jT9SOXduiL3IQuG9w5nJ9A3JvlGttdRy1ICXyTQTqBo74t7Ac',
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source)
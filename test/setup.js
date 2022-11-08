import Vue from 'vue';
import Vuetify from 'vuetify';
import { config } from '@vue/test-utils';

Vue.config.silent = true;

// Mock Nuxt components
config.stubs.nuxt = { template: '<div />' };

Vue.use(Vuetify);

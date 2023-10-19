import type { Schema, Attribute } from '@strapi/strapi';

export interface ComponentsDoubleBlock extends Schema.Component {
  collectionName: 'components_components_double_blocks';
  info: {
    displayName: 'Double Block';
    icon: 'file';
  };
  attributes: {
    image: Attribute.Media & Attribute.Required;
    richText: Attribute.RichText & Attribute.Required;
    layout: Attribute.Enumeration<['right-left', 'left-right']> &
      Attribute.Required;
  };
}

export interface ComponentsSimpleTextBlock extends Schema.Component {
  collectionName: 'components_components_simple_text_blocks';
  info: {
    displayName: 'Simple Text Block';
    icon: 'file';
  };
  attributes: {
    richText: Attribute.RichText & Attribute.Required;
  };
}

export interface GlobalHeader extends Schema.Component {
  collectionName: 'components_global_headers';
  info: {
    displayName: 'Header';
    icon: 'layer';
  };
  attributes: {
    categories: Attribute.Relation<
      'global.header',
      'oneToMany',
      'api::category.category'
    >;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'components.double-block': ComponentsDoubleBlock;
      'components.simple-text-block': ComponentsSimpleTextBlock;
      'global.header': GlobalHeader;
    }
  }
}

import type { Schema, Attribute } from '@strapi/strapi';

export interface ComponentsDoubleTextMediaBlock extends Schema.Component {
  collectionName: 'components_components_double_text_media_blocks';
  info: {
    displayName: 'Double Text Media block';
    icon: 'server';
    description: '';
  };
  attributes: {
    richText: Attribute.RichText & Attribute.Required;
    media: Attribute.Media & Attribute.Required;
    layout: Attribute.Enumeration<['media-text', 'text-media']> &
      Attribute.DefaultTo<'text-media'>;
    mediaFit: Attribute.Enumeration<['cover', 'contain']> &
      Attribute.DefaultTo<'cover'>;
    textFit: Attribute.Enumeration<['left', 'center', 'right']> &
      Attribute.DefaultTo<'left'>;
  };
}

export interface ComponentsSimpleMediaBlock extends Schema.Component {
  collectionName: 'components_components_simple_media_blocks';
  info: {
    displayName: 'Simple Media block';
    icon: 'picture';
    description: '';
  };
  attributes: {
    media: Attribute.Media & Attribute.Required;
  };
}

export interface ComponentsSimpleTextBlock extends Schema.Component {
  collectionName: 'components_components_simple_text_blocks';
  info: {
    displayName: 'Simple Text block';
    icon: 'file';
    description: '';
  };
  attributes: {
    richText: Attribute.RichText & Attribute.Required;
    size: Attribute.Enumeration<['full', 'large', 'medium', 'small']> &
      Attribute.Required &
      Attribute.DefaultTo<'large'>;
    textAlign: Attribute.Enumeration<['left', 'center', 'right']> &
      Attribute.Required &
      Attribute.DefaultTo<'left'>;
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
      'components.double-text-media-block': ComponentsDoubleTextMediaBlock;
      'components.simple-media-block': ComponentsSimpleMediaBlock;
      'components.simple-text-block': ComponentsSimpleTextBlock;
      'global.header': GlobalHeader;
    }
  }
}

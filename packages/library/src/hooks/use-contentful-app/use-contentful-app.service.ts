import { useRef } from 'react';

import { EntryService } from '@sam/contentful/management';
import { Region, RegionCode, Regions, Widget } from '@sam/types';

import { ContentfulAppContract } from './use-contentful-app.contract';

const Stores = {
  entryService: new EntryService(),
};

const parseEntry = (entry: any): Widget => {
  const { sys, fields } = entry;

  const properties = Object.entries(fields)
    .map(([key, value]) => [key, value])
    .reduce((obj: { [key: string]: unknown }, entry: any[]) => {
      obj[entry[0]] = entry[1];
      return obj;
    }, {});

  return {
    id: sys.id,
    _template: sys.contentType.sys.id,
    published: entry.isPublished(),
    publishedAt: sys.publishedAt,
    updatedAt: sys.updatedAt,
    ...properties,
  };
};

export class ContentfulAppService implements ContentfulAppContract {
  readonly query = {
    locale: '*',
    content_type: 'samTestModel',
  };

  constructor() {}

  async createWidget(model: { [key: string]: unknown }): Promise<void> {
    await Stores.entryService.create(this.query.content_type, model);
  }

  async deleteWidget(widgetId: string): Promise<void> {
    await Stores.entryService.del(widgetId, this.query);
  }

  async getAllWidgets(): Promise<Widget[] | null> {
    const entries = await Stores.entryService.getAll(this.query);

    const widgets = entries.map((entry) => {
      return parseEntry(entry);
    });

    return widgets;
  }

  async getWidgetById(id: string): Promise<Widget | null> {
    return {
      id,
      _template: '',
    };
  }

  async getAllRegions(): Promise<{ regions: Region[]; defaultRegion: Region }> {
    const locales = await Stores.entryService.locales();

    const regions: Region[] = locales.items.map((item) => {
      return Regions[item.code as RegionCode];
    });

    const index = locales.items.findIndex((locale) => locale.default);
    const defaultRegion = Regions[locales.items[index].code as RegionCode];

    return {
      regions,
      defaultRegion,
    };
  }

  async publishWidget(id: string): Promise<Widget | null> {
    const entry = await Stores.entryService.publish(id, this.query);

    return parseEntry(entry);
  }

  async unPublishWidget(id: string): Promise<Widget | null> {
    const entry = await Stores.entryService.unPublish(id, this.query);

    return parseEntry(entry);
  }

  async updateWidget(
    id: string,
    model: { [key: string]: unknown }
  ): Promise<Widget | null> {
    const entry = await Stores.entryService.update(id, model);

    return parseEntry(entry);
  }
}

export const useContentfulAppService = () => {
  return useRef(new ContentfulAppService()).current;
};

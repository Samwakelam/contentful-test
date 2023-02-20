import { Widget, Region } from '@sam/types';

export interface ContentfulAppContract {
  createWidget(model: { [key: string]: unknown }): Promise<void>;
  deleteWidget(widgetId: string): Promise<void>;
  getAllWidgets(): Promise<Widget[] | null>;
  getWidgetById(id: string): Promise<Widget | null>;
  getAllRegions(): Promise<{ regions: Region[]; defaultRegion: Region }>;
  publishWidget(id: string): Promise<Widget | null>;
  unPublishWidget(id: string): Promise<Widget | null>;
  updateWidget(
    id: string,
    model: { [key: string]: unknown }
  ): Promise<Widget | null>;
}

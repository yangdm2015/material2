import {NgModule, ModuleWithProviders} from '@angular/core';
import {MdLineModule, MdCommonModule} from '../core';
import {
  MdGridTile, MdGridTileText, MdGridTileFooterCssMatStyler,
  MdGridTileHeaderCssMatStyler, MdGridAvatarCssMatStyler
} from './grid-tile';
import {MdGridList} from './grid-list';


@NgModule({
  imports: [MdLineModule, MdCommonModule],
  exports: [
    MdGridList,
    MdGridTile,
    MdGridTileText,
    MdLineModule,
    MdCommonModule,
    MdGridTileHeaderCssMatStyler,
    MdGridTileFooterCssMatStyler,
    MdGridAvatarCssMatStyler
  ],
  declarations: [
    MdGridList,
    MdGridTile,
    MdGridTileText,
    MdGridTileHeaderCssMatStyler,
    MdGridTileFooterCssMatStyler,
    MdGridAvatarCssMatStyler
  ],
})
export class MdGridListModule {
  /** @deprecated */
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: MdGridListModule,
      providers: []
    };
  }
}


export * from './grid-list';
export {MdGridTile} from './grid-tile';

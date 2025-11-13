import { EntityGrid } from '@serenity-is/corelib';
import { GenreColumns, GenreRow, GenreService } from '../../ServerTypes/MovieDB';
import { GenreDialog } from './GenreDialog';

export class GenreGrid extends EntityGrid<GenreRow> {
    static [Symbol.typeInfo] = this.registerClass("MovieTutorial.MovieDB.");

    protected getColumnsKey() { return GenreColumns.columnsKey; }
    protected getDialogType() { return GenreDialog; }
    protected getRowDefinition() { return GenreRow; }
    protected getService() { return GenreService.baseUrl; }
}
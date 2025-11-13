import { EntityGrid } from '@serenity-is/corelib';
import { MovieGenresColumns, MovieGenresRow, MovieGenresService } from '../../ServerTypes/MovieDB';
import { MovieGenresDialog } from './MovieGenresDialog';

export class MovieGenresGrid extends EntityGrid<MovieGenresRow> {
    static [Symbol.typeInfo] = this.registerClass("MovieTutorial.MovieDB.");

    protected getColumnsKey() { return MovieGenresColumns.columnsKey; }
    protected getDialogType() { return MovieGenresDialog; }
    protected getRowDefinition() { return MovieGenresRow; }
    protected getService() { return MovieGenresService.baseUrl; }
}
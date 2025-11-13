import { EntityDialog } from '@serenity-is/corelib';
import { MovieGenresForm, MovieGenresRow, MovieGenresService } from '../../ServerTypes/MovieDB';

export class MovieGenresDialog extends EntityDialog<MovieGenresRow, any> {
    static [Symbol.typeInfo] = this.registerClass("MovieTutorial.MovieDB.");

    protected getFormKey() { return MovieGenresForm.formKey; }
    protected getRowDefinition() { return MovieGenresRow; }
    protected getService() { return MovieGenresService.baseUrl; }

    protected form = new MovieGenresForm(this.idPrefix);
}
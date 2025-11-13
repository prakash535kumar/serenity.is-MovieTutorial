using Serenity.ComponentModel;
using System.ComponentModel;

namespace MovieTutorial.MovieDB.Columns;

[ColumnsScript("MovieDB.MovieCast")]
[BasedOnRow(typeof(MovieCastRow), CheckNames = true)]
//public class MovieCastColumns
//{
//    [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
//    public int MovieCastId { get; set; }
//    public string MovieTitle { get; set; }
//    [EditLink, Width(250)]
//    public string PersonFullName { get; set; }
//    [EditLink, Width(250)]
//    public string Character { get; set; }
//}

public class MovieCastColumns
{
    public string PersonFullName { get; set; }
    public string Character { get; set; }
}
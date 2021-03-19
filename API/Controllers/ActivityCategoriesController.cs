using System.Threading.Tasks;
using Application.ActivityCategories;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    [Route("api/activity-categories")]
    public class ActivityCategoriesController : BaseApiController
    {
        [HttpGet] //activity categories
        public async Task<IActionResult> GetActivityCategories(){
            return HandleResult(await Mediator.Send(new List.Query()));
        }
    }
}
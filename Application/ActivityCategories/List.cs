using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;
using Application.Core;
using Domain;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using Persistence;

namespace Application.ActivityCategories
{
    public class List
    {
        public class Query : IRequest<Result<List<ActivityCategory>>>{}

        public class Handler : IRequestHandler<Query, Result<List<ActivityCategory>>>
        {
            public readonly DataContext _context;
            private readonly ILogger _logger;

            public Handler(DataContext context, ILogger<List> logger)
            {
                _logger = logger;
                _context = context;
            }

            public async Task<Result<List<ActivityCategory>>> Handle(Query request, CancellationToken cancellationToken)
            {
                List<ActivityCategory> activityCategories = await _context.ActivityCategories.ToListAsync(cancellationToken);
                return Result<List<ActivityCategory>>.Success(activityCategories);
            }
        }
    }
}
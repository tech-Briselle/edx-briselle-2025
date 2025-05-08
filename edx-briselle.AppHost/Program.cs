var builder = DistributedApplication.CreateBuilder(args);

builder.AddProject<Projects.edx_briselle_Server>("edx-briselle-server");

builder.Build().Run();

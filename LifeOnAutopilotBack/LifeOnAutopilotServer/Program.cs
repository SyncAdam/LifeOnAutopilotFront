using Microsoft.AspNetCore.Http.HttpResults;
using Microsoft.AspNetCore.Mvc;
using Microsoft.VisualBasic;

namespace LifeOnAutopilot;

class Program
{
    public static void Main()
    {
        Console.WriteLine("Starting Server");

        var builder = WebApplication.CreateBuilder();

        builder.Services.AddHostedService<Services.MyService>();
        builder.Services.AddEndpointsApiExplorer();
        builder.Services.AddOpenApiDocument(config =>
        {
            config.DocumentName = "Hello world";
            config.Title = "TestAPI";
            config.Version = "v1.0.0";
        });

        builder.Services.AddCors(options =>
        {
            options.AddPolicy(name: "AllowLoaOrigins",
                                policy =>
                                {
                                    policy.WithOrigins("https://sibulabs.net",
                                                        "http://127.0.0.1:4200");
                                });
        });

        var host = builder.Build();

        host.MapGet("/", () => new { message = "Hello Andreea!" });
        host.UseCors("AllowLoaOrigins");
        host.UseOpenApi();
        host.UseSwaggerUi();

        host.Run();
    }
}
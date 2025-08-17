namespace LifeOnAutopilot;
static class Program
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

        var host = builder.Build();

        host.MapGet("/", () => "Hello World!");

        host.UseOpenApi();
        host.UseSwaggerUi();

        host.Run();
    }
}
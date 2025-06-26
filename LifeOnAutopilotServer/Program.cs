namespace LifeOnAutopilot;
static class Program
{
    public static void Main()
    {
        Console.WriteLine("Starting Server...");
        var builder = WebApplication.CreateBuilder();
        builder.Services.AddHostedService<Services.MyService>();
        var host = builder.Build();
        host.Run();
    }
}
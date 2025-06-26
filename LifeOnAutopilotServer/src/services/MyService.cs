namespace LifeOnAutopilot.Services;

public class MyService : IHostedService
{
    public Task StartAsync(CancellationToken cancellationToken)
    {
        Console.WriteLine("Started Worker service...");
        return Task.CompletedTask;
    }

    public Task StopAsync(CancellationToken cancellationToken)
    {
        Console.WriteLine("Stopped Worker service");
        return Task.CompletedTask;
    }
}
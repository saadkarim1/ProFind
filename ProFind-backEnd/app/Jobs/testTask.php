<?php

namespace App\Jobs;

use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Queue\Queueable;
use Illuminate\Support\Facades\Log;

class testTask implements ShouldQueue
{
    use Queueable;

    /**
     * Create a new job instance.
     */
    // public string $name;
    public function __construct(public string $name)
    {
        // $this->name = $name;
    }

    /**
     * Execute the job.
     */
    public function handle(): void
    {
        // Log::info("");//(`salaaam assi ${$name}`);

        Log::info('sallaaam assi ' . $this->name);
    }
}

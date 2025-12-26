<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('recruiters', function (Blueprint $table) {

            //recruiter authentication fields
            $table->uuid("id")->primary();
            $table->string('name');
            $table->string('email')->unique();
            $table->string('password');
            $table->timestamp('email_verified_at')->nullable();
            $table->string('role')->default('recruiter');


            //company fields
            $table->string("title")->nullable();
            $table->text("description")->nullable();
            $table->string("company_website")->nullable();
            $table->string("sector")->nullable();
            $table->string("company_logo")->nullable();
            $table->string("city")->nullable();

            $table->rememberToken();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('companies');
    }
};

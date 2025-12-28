<?php

use App\Models\Company;
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
        Schema::create('offers', function (Blueprint $table) {
            $table->uuid("id")->primary();
            $table->string("title");
            $table->text("description");
            $table->string("location");
            $table->string("duration");
            $table->enum("offer_type", ["remote", "freelance", "part time", 'full time']);
            $table->enum("offer_category", ["technology", "engineering", "sales and marketing", "finance and legal"]);
            $table->foreignUuid("company_id")->constrained('recruiters', 'id')->onDelete('cascade');
            $table->integer("salary")->nullable();
            $table->string("email_to_apply")->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('offers');
    }
};

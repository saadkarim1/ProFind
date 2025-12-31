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
        Schema::create('resumes', function (Blueprint $table) {
            $table->id();
            $table->foreignUuid('user_id')->constrained('users', 'id')->onDelete('cascade');
            $table->string('file_name'); // Original name: "My_Resume.pdf"
            $table->string('cv_url');    // Cloudinary Secure URL
            $table->string('public_id'); // Cloudinary Public ID (for deleting)
            $table->string('preview_url'); // Cloudinary Public ID (for deleting)
            $table->boolean('is_primary')->default(true);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('resumes');
    }
};

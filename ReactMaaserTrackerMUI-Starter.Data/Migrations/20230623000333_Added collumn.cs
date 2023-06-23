using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace ReactMaaserTrackerMUI_Starter.Data.Migrations
{
    public partial class Addedcollumn : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateIndex(
                name: "IX_Incomes_SourceId",
                table: "Incomes",
                column: "SourceId");

            migrationBuilder.AddForeignKey(
                name: "FK_Incomes_Sources_SourceId",
                table: "Incomes",
                column: "SourceId",
                principalTable: "Sources",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Incomes_Sources_SourceId",
                table: "Incomes");

            migrationBuilder.DropIndex(
                name: "IX_Incomes_SourceId",
                table: "Incomes");
        }
    }
}

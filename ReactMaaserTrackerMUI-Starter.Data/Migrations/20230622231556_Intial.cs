using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace ReactMaaserTrackerMUI_Starter.Data.Migrations
{
    public partial class Intial : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Source",
                table: "Incomes");

            migrationBuilder.AddColumn<int>(
                name: "SourceId",
                table: "Incomes",
                type: "int",
                nullable: false,
                defaultValue: 0);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "SourceId",
                table: "Incomes");

            migrationBuilder.AddColumn<string>(
                name: "Source",
                table: "Incomes",
                type: "nvarchar(max)",
                nullable: true);
        }
    }
}

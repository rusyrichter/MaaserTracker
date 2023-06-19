using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace ReactMaaserTrackerMUI_Starter.Data.Migrations
{
    public partial class Next : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "Amount",
                table: "Maaser",
                type: "int",
                nullable: false,
                defaultValue: 0);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Amount",
                table: "Maaser");
        }
    }
}

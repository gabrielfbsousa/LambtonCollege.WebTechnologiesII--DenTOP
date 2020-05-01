$(document).ready(function() {
    $("#accordion h3").each(function() {
        $(this).click(function() {
            var div = $(this).next();
            var h3 = $(this);

            div.slideToggle('2000', 'easeOutBounce')
                .siblings('div:visible').slideUp('2000', 'easeOutBounce');
        });
    });

    $("#slider").bxSlider({
        auto: true,
        autoControls: true,
        captions: true,
        minSlides: 3,
        maxSlides: 3,
        slideWidth: 260,
        slideMargin: 10,
        infiniteLoop: false
    });

    $(window).scroll(function() {
        $(".slideanim").each(function() {
            
            var currentPosition = $(this).offset().top;

            var topOfScreen = $(window).scrollTop();
            if (currentPosition < topOfScreen + 760) {
                $(this).addClass("slide");
            }
        });
    });;

    $.getJSON("ourteam.json", function(data) {
        $.each(data, function() {
            $.each(this, function(key, value) {

                if (value.title == "CEO") {
                    $("#CEO").append(
                        "<strong>Name:</strong> " + value.name + "<br>" +
                        "<strong>Title:</strong> " + value.title + "<br>" +
                        "<strong>Department:</strong> " + value.department + "<br>" +
                        "<strong>Bio:</strong> " + value.bio + "<br><br>"
                    );
                } else if (value.title == "Senior Manager") {
                    $("#senior_manager").append(
                        "<strong>Name:</strong> " + value.name + "<br>" +
                        "<strong>Title:</strong> " + value.title + "<br>" +
                        "<strong>Department:</strong> " + value.department + "<br>" +
                        "<strong>Bio:</strong> " + value.bio + "<br><br>"
                    );
                } else if (value.title == "Architect" || value.title == "Project Manager") {
                    $("#architects_projectmanager").append(
                        "<strong>Name:</strong> " + value.name + "<br>" +
                        "<strong>Title:</strong> " + value.title + "<br>" +
                        "<strong>Department:</strong> " + value.department + "<br>" +
                        "<strong>Bio:</strong> " + value.bio + "<br><br>"
                    );

                } else if (value.title == "Tech Leader" || value.title == "Team Leader" || value.title == "Business Analyst") {
                    $("#tech_leaders_team_leaders_business_analysts").append(
                        "<strong>Name:</strong> " + value.name + "<br>" +
                        "<strong>Title:</strong> " + value.title + "<br>" +
                        "<strong>Department:</strong> " + value.department + "<br>" +
                        "<strong>Bio:</strong> " + value.bio + "<br><br>"
                    );
                } else if (value.title == "Senior Software Engineer" || value.title == "Senior Quality Assurance" || value.title == "Senior Developer") {
                    $("#senior_se_sqa_sd").append(
                        "<strong>Name:</strong> " + value.name + "<br>" +
                        "<strong>Title:</strong> " + value.title + "<br>" +
                        "<strong>Department:</strong> " + value.department + "<br>" +
                        "<strong>Bio:</strong> " + value.bio + "<br><br>"
                    );
                } else if (value.title == "Software Engineer" || value.title == "Quality Assurance Engineer" || value.title == "Development Supervisor") {
                    $("#software_qaengineer_development_supervisors").append(
                        "<strong>Name:</strong> " + value.name + "<br>" +
                        "<strong>Title:</strong> " + value.title + "<br>" +
                        "<strong>Department:</strong> " + value.department + "<br>" +
                        "<strong>Bio:</strong> " + value.bio + "<br><br>"
                    );
                } else {
                    $("#associate_and_junior").append(
                        "<strong>Name:</strong> " + value.name + "<br>" +
                        "<strong>Title:</strong> " + value.title + "<br>" +
                        "<strong>Department:</strong> " + value.department + "<br>" +
                        "<strong>Bio:</strong> " + value.bio + "<br><br>"
                    );
                }
            });
        });
    });
});

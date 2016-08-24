/*******************************************************************************
 * Copyright (c) 2016. MIT License.
 * NhatHo-nhatminhhoca@gmail.com
 ******************************************************************************/

(function ($) {
    "use strict";
    var tourDesc = [{
        id: "translation-tour",
        steps: [{
            content: "step1",
            position: "left",
            target: ".text-center",
            title: "Latin",
            nextButton: "Deinde",
            backButton: "Back"
        }, {
            content: "step2",
            position: "top",
            target: "#leftblock",
            title: "French",
            nextButton: "Prochain",
            backButton: "Arrière"
        }, {
            content: "step3",
            position: "bottom",
            target: "#rightblock",
            title: "Japanese",
            nextButton: "次",
            backButton: "バック"
        }, {
            content: "step4",
            position: "right",
            target: "#bottomblock",
            title: "Spanish",
            nextButton: "Siguiente",
            backButton: "Espalda",
            skip: 5,
            skipButton: "Omitir"
        }, {
            content: "Read the explanations for more information.",
            position: "top",
            target: ".success .container",
            type: "info",
            doneButton: "¡Está hecho!",
            backButton: "Espalda"
        }]
    }];

    var functionsList = {};

    var translationList = {
        step1: "Cavillandi attendamus intelligat quaerendum ii indubitati argumentum ut. Ei qualia enitar simile de scient re delebo ac.",
        step2: "Dur frisottent defilaient chantaient son cherissait construits. Plutot mes petite ifs guerre bucher eux age.",
        step3: " 復讐者」 伯母さん . 復讐者」. 第三章 第八章 第四章 第七章 . 復讐者」 伯母さん. 第十八章 第十五章 第十七章 手配書 第十九章 第十三章.",
        step4: "Si dominio te tocando durante la acuerdo caridad oh. Adulterino admiracion lechuguino hoy devolucion tan grandisimo respetaban."
    };

    $("#demoButton").on('click', function (e) {
        e.preventDefault();
        e.stopPropagation();
        var flextour = new FlexTour(tourDesc, functionsList, translationList); // A list of functions is given
        flextour.run();
    });
})(jQuery); // End of use strict
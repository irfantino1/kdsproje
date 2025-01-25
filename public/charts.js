var oilCanvas = document.getElementById("oilChart");

Chart.defaults.global.defaultFontFamily = "Lato";
Chart.defaults.global.defaultFontSize = 18;

var oilData = {
    labels: [
        "Garson",
        "Resepsiyonist",
        "Komi",
        "Bahçıvan"
    ],
    datasets: [
        {
            data: [5, 4, 1, 7],
            backgroundColor: [
                "#FF6384",
                "#63FF84",
                "#F7F700",
                "#8463FF"
                
            ]
        }]
};
var options = {
  
    legend: {
        display: true,
        position: 'top',
        labels: {
            boxWidth: 80,
            fontColor: 'black'
        }
    }
};

var options = {
    title: {
      display: true,
      text: 'Pozisyonlara Göre Tecrübe Dağılımı',
    }
  };

var pieChart = new Chart(oilCanvas, {
  type: 'pie',
  data: oilData,
  options:options
});


//column charts
google.charts.load('current', {packages: ['corechart', 'bar']});
google.charts.setOnLoadCallback(drawMultSeries);

function drawMultSeries() {
      var data = new google.visualization.DataTable();
      data.addColumn('string', 'Pozisyon');
      data.addColumn('number', 'Başvuran Sayısı');
      data.addColumn('number', 'Kabul Sayısı');

      data.addRows([
        ['Garson', 24, 14],
        ['Resepsiyonist', 28, 14],
        ['Komi', 20, 14],
        ['Bahçıvan', 18, 8]
       
      ]);

      var options = {
        title: 'Pozisyonlara Göre Başvuran Sayısı ve Kabul Sayısı',
        hAxis: {
          title: 'Pozisyon',
          viewWindow: {
            min: [7, 30, 0],
            max: [17, 30, 0]
          }
        },
        vAxis: {
          title: 'Başvuran Sayısı'
        },
        legend: { position: 'bottom' }
      };

      var chart = new google.visualization.ColumnChart(
        document.getElementById('chart_div'));

      chart.draw(data, options);
    }
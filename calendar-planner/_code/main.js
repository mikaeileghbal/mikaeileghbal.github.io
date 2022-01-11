(() => {
  "use strict";
  let e, t, n;
  function a(a) {
    (t = a.getFullYear()), (n = a.getDate());
    let o = "<div class='year-container'>";
    for (let e = 0; e < 12; e++) o += r(new Date(a.getFullYear(), e, 1));
    e.innerHTML = o + "</div>";
  }
  function r(e) {
    let t = "<div class='month-container'>";
    return (
      (t += "<table id='calendar_table' class='calendar_table'>"),
      (t += (function (e) {
        let t = [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
            "October",
            "November",
            "December",
          ],
          n = e.getMonth(),
          a = e.getFullYear();
        return (
          `<caption id="${t[n]}">` +
          t[n] +
          " <span class='year' id='year'>" +
          a +
          "</span></caption>"
        );
      })(e)),
      (t += (function () {
        let e = ["S", "M", "T", "W", "T", "F", "S"],
          t = "<tr>";
        for (let n = 0; n < e.length; n++)
          t += "<th class='calendar-weakdays'>" + e[n] + "</th>";
        return (t += "</tr>"), t;
      })()),
      (t += (function (e) {
        let t = 0,
          n = new Date(e.getFullYear(), e.getMonth(), 1),
          a = n.getDay(),
          r = "<tr>";
        for (let e = 0; e < a; e++)
          r += "<td class='empty'><div class='empty-day'></div></td>";
        let o = (function (e) {
            let t = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
              n = e.getFullYear(),
              a = e.getMonth();
            return (
              n % 4 == 0 && ((n % 100 == 0 && n % 400 != 0) || (t[1] = 29)),
              t[a]
            );
          })(e),
          d = new Date().getDate(),
          l = new Date().getMonth(),
          c = "",
          i = "";
        for (let s = 1; s <= o; s++)
          n.setDate(s),
            (a = n.getDay()),
            (t = `${n.getFullYear()}${
              2 === n.getMonth().toString().length
                ? n.getMonth()
                : "0" + n.getMonth()
            }${
              2 === n.getDate().toString().length
                ? n.getDate()
                : "0" + n.getDate()
            }`),
            (c = 6 === a ? "sat" : ""),
            (i = 5 === a ? "fri" : ""),
            0 === a && (r += "<tr>"),
            s === d && e.getMonth() === l
              ? (r +=
                  `<td  class='calendar-dates ${c} ${i}' id='calendar-today'><div data-daynumber=${t} class='days'>` +
                  s +
                  dayEvents[s] +
                  "</div></td>")
              : (r +=
                  `<td  class='calendar-dates ${c} ${i}'><div data-daynumber=${t} class='days'>` +
                  s +
                  dayEvents[s] +
                  "</div></td>"),
            6 === a && (r += "</tr>"),
            t++;
        (n = new Date(e.getFullYear(), e.getMonth(), o)), (a = n.getDay());
        for (let e = a + 1; e < 7; e++)
          r += "<td class='empty'><div class='empty-day'></div></td>";
        return (r += "</tr>"), r;
      })(e)),
      (t += "</table>"),
      (t += "</div>"),
      t
    );
  }
  console.log([
    {
      date: "202112/20",
      description: "Today I am going to meet my friend.",
      todo: ["Meeting", "Reading", "Working"],
    },
    {
      date: "202112/20",
      description: "Today I am going to meet my friend.",
      todo: ["Meeting", "Reading", "Working"],
    },
    {
      date: "202112/20",
      description: "Today I am going to meet my friend.",
      todo: ["Meeting", "Reading", "Working"],
    },
    {
      date: "202112/20",
      description: "Today I am going to meet my friend.",
      todo: ["Meeting", "Reading", "Working"],
    },
    {
      date: "202112/20",
      description: "Today I am going to meet my friend.",
      todo: ["Meeting", "Reading", "Working"],
    },
  ]);
  let o = document.getElementById("calendar"),
    d = document.querySelector("#btnToday"),
    l = document.querySelector("#btnPreviousYear"),
    c = document.querySelector("#btnNextYear"),
    i = document.querySelector("#btnCloseSidePanel"),
    s = document.querySelector(".side-panel"),
    g = document.querySelector("#btnOpenNotes");
  const u = document.querySelectorAll(".todo__label");
  console.log(u);
  let y = localStorage.getItem("currentYear") || new Date().getFullYear(),
    m = new Date(y);
  m.setDate(new Date().getDate()), m.setMonth(new Date().getMonth());
  let v = document.querySelector(".time");
  function f(e) {
    e.forEach((t) => {
      t.addEventListener("click", (n) => {
        e.forEach((e) => {
          e.classList.remove("selected");
        }),
          t.classList.add("selected");
        const a = n.target.dataset.daynumber,
          r = new Date(a.slice(0, 4), a.slice(4, 6), a.slice(6, 8));
        console.log(r),
          (document.querySelector(".side-panel_date").innerText =
            r.toDateString());
      });
    });
  }
  function D() {
    var e;
    (e = y),
      m.setFullYear(e),
      (function (e) {
        localStorage.setItem("currentYear", e);
      })(y),
      a(m),
      S(),
      f(document.querySelectorAll(".days"));
  }
  function S() {
    const e = document.querySelector(".current-year"),
      a = document.querySelector(".today");
    (e.innerText = t), (a.innerText = n);
  }
  setInterval(function () {
    v.innerText = new Date().toLocaleTimeString();
  }, 1e3),
    window.addEventListener("load", () => {
      (e = o), a(m), S(), f(document.querySelectorAll(".days"));
    }),
    d.addEventListener("click", (e) => {
      e.preventDefault(), (y = new Date().getFullYear()), D();
    }),
    l.addEventListener("click", (e) => {
      y--, D();
    }),
    c.addEventListener("click", (e) => {
      y++, D();
    }),
    i.addEventListener("click", (e) => {
      s.classList.remove("active");
    }),
    g.addEventListener("click", (e) => {
      s.classList.toggle("active");
    }),
    u.forEach((e) => {
      e.addEventListener("click", (e) => {
        e.target.classList.toggle("checked");
      });
    });
})();

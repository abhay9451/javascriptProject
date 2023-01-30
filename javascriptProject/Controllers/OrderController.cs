using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using javascriptProject.Models;
using javascriptProject.Models.VModel;

namespace javascriptProject.Controllers
{
    public class OrderController : Controller
    {
        public ApplicationDbContext DbContext { get; }
        public OrderController(ApplicationDbContext dbContext)
        {
            DbContext = dbContext;
        }

        public IActionResult Orders()
        {
            return View();
        }

        public IActionResult GetMenues()
        {
            var menues = DbContext.Menus.ToList();
            return Json(menues);
        }
        [HttpPost]
        public IActionResult PlaceOrder(Order order)
        {
            order.Datetime = DateTime.Now.ToString();
            DbContext.Orders.Add(order);
            DbContext.SaveChanges();

            var orderSummary = (from o in DbContext.Orders
                                join
                                m in DbContext.Menus
                                on o.ItemId equals m.Id
                                select new PlacedOrderDetail()
                                {
                                    Id = o.Id,
                                    Item = m.Item,
                                    Price = m.Price,
                                    Datetime = o.Datetime,
                                    Quantity= o.Quantity
                                }).ToList();

           // var menues = DbContext.Menus.ToList();
            return Json(orderSummary);
        }
        public IActionResult SampleForm()
        {
            return View();
        }
    }
}

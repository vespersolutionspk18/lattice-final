"use client"

import * as React from "react"
import { ChevronLeftIcon, ChevronRightIcon } from "@radix-ui/react-icons"
import { cn } from "@/lib/utils"

export type CalendarProps = React.HTMLAttributes<HTMLDivElement> & {
  mode?: "single" | "multiple" | "range"
  selected?: Date | Date[] | { from: Date; to?: Date }
  onSelect?: (date: Date | Date[] | { from: Date; to?: Date } | undefined) => void
  disabled?: (date: Date) => boolean
  initialFocus?: boolean
}

function Calendar({
  className,
  mode = "single",
  selected,
  onSelect,
  ...props
}: CalendarProps) {
  const [currentMonth, setCurrentMonth] = React.useState(
    selected instanceof Date ? selected : new Date()
  )

  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ]

  const getDaysInMonth = (date: Date) => {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate()
  }

  const getFirstDayOfMonth = (date: Date) => {
    return new Date(date.getFullYear(), date.getMonth(), 1).getDay()
  }

  const previousMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1))
  }

  const nextMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1))
  }

  const daysInMonth = getDaysInMonth(currentMonth)
  const firstDay = getFirstDayOfMonth(currentMonth)
  const days: (number | null)[] = []

  for (let i = 0; i < firstDay; i++) {
    days.push(null)
  }

  for (let i = 1; i <= daysInMonth; i++) {
    days.push(i)
  }

  const isSelected = (day: number | null) => {
    if (!day || !selected || !(selected instanceof Date)) return false
    return (
      selected.getDate() === day &&
      selected.getMonth() === currentMonth.getMonth() &&
      selected.getFullYear() === currentMonth.getFullYear()
    )
  }

  return (
    <div className={cn("p-3", className)} {...props}>
      <div className="flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
        <div className="space-y-4">
          <div className="relative flex items-center justify-between pt-1">
            <button
              onClick={previousMonth}
              className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors hover:bg-gray-100 dark:hover:bg-gray-800 h-7 w-7"
              type="button"
            >
              <ChevronLeftIcon className="h-4 w-4" />
              <span className="sr-only">Previous month</span>
            </button>
            <div className="text-sm font-medium">
              {monthNames[currentMonth.getMonth()]} {currentMonth.getFullYear()}
            </div>
            <button
              onClick={nextMonth}
              className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors hover:bg-gray-100 dark:hover:bg-gray-800 h-7 w-7"
              type="button"
            >
              <ChevronRightIcon className="h-4 w-4" />
              <span className="sr-only">Next month</span>
            </button>
          </div>
          <table className="w-full border-collapse space-y-1">
            <thead>
              <tr className="flex">
                {["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"].map((day) => (
                  <th
                    key={day}
                    className="flex-1 text-xs font-medium text-gray-500 dark:text-gray-400"
                  >
                    {day}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {Array.from({ length: Math.ceil(days.length / 7) }).map((_, weekIndex) => (
                <tr key={weekIndex} className="flex mt-2">
                  {days.slice(weekIndex * 7, (weekIndex + 1) * 7).map((day, dayIndex) => (
                    <td
                      key={`${weekIndex}-${dayIndex}`}
                      className="flex-1 text-center p-0"
                    >
                      {day && (
                        <button
                          className={cn(
                            "inline-flex h-9 w-9 items-center justify-center rounded-md text-sm font-normal transition-colors hover:bg-gray-100 dark:hover:bg-gray-800",
                            isSelected(day) && "bg-gray-900 text-gray-50 hover:bg-gray-900 hover:text-gray-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50 dark:hover:text-gray-900"
                          )}
                          type="button"
                          onClick={() => {
                            if (mode === "single" && onSelect) {
                              const date = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day)
                              onSelect(date)
                            }
                          }}
                        >
                          {day}
                        </button>
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export { Calendar }
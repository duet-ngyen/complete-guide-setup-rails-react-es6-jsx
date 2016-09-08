class PeopleController < ApplicationController
  def index
    if params[:search].present?
      @people = Person.where("first_name LIKE ?", "%#{params[:search]}%")
    else
      @people = Person.all
    end

    @people = @people.page(params[:page])
    # binding.pry
    render json: {
        people: @people,
        meta: {
            current_page: @people.current_page,
            next_page: @people.next_page,
            prev_page: @people.prev_page,
            total_pages: @people.total_pages,
            total_count: @people.total_count
        }
    }
  end
end
